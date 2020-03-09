from django.test import TestCase

from encurtador.models import Link
from encurtador.forms import LinkForm


class TestLink(TestCase):

    def setUp(self):
        self.link = Link.objects.create(
            url     = 'https://gitlab.com/pencillabs'
        )

    def test_url(self):        
        self.assertEqual(
            str(self.link),
            ('https://gitlab.com/pencillabs : 1')
        )
    
    def test_to_short_url(self):
        self.assertEqual(
            self.link.to_short_url(),
            '867nv'
        )

    def test_to_id(self):
        self.assertEqual(
            Link.to_id('867nv'),
            (1)
        )

class TestFormLink(TestCase):

    def setUp(self):
        self.form = LinkForm(data={'url' : 'https://gitlab.com/pencillabs'})

    def test_form_valid(self):
        self.assertTrue(self.form.is_valid())